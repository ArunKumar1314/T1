import BackgroundFetch from "react-native-background-fetch";
 import SQLite from 'react-native-sqlite-storage';
 import { makeRequest } from "../../makeReq";

 const db = SQLite.openDatabase({ name: 'AppDatabase.db', location: 'default' });

 const backgroundTask = async () => {
     console.log("Inish")
   return new Promise<void>(async (resolve, reject) => {
     (await db).transaction(tx => {
      tx.executeSql(
        "SELECT * FROM Generic WHERE isSynced = false",
         [],
         async (_, resultSet) => {
           const rows = resultSet.rows;
          
           for (let i = 0; i < rows.length; i++) {
             let task = rows.item(i);
            
             try {
               // Perform API request for each unsynced task
               await makeRequest(
                 'http://192.168.123.157:8083/api/v3/auth/login',
                 'POST',
                { "username": "sdm3_banur_test", "password": "Depot@123" },
                false
              );
              
              // Update the record to mark as synced
              tx.executeSql(
            "UPDATE Generic SET isSynced = true WHERE id = ?",
            [task.id]
          );
        } catch (error) {
          console.error(`Failed to sync task with id ${task.id}:`, error);
        }
      }
      resolve(); 
    },
    (txError) => {
      console.error("Transaction error:", txError);
      reject(txError); 
    }
  );
});
   });
 };

// Configure Background Fetch
 BackgroundFetch.configure(
   {
minimumFetchInterval: 15, // Adjust as needed
stopOnTerminate: false,
startOnBoot: true,
   },
   async (taskId) => {
console.log("[BackgroundFetch] taskId:", taskId);
await backgroundTask();
BackgroundFetch.finish(taskId);
   },
  (error) => {
console.error("[BackgroundFetch] Failed to configure", error);
   }
 );


 export default backgroundTask;
