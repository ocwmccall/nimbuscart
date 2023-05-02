const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

exports.newListTrigger = functions.firestore
  .document('users/{docId}')
  .onCreate((snap, context) => {
    const newList = snap.data();

    const uid = newList.uid;
    const title = newList.title;
    const docId = context.params.docId;

    return db.collection("users").where("uid", "==", uid).where("title", "==", "__ListIndex").get()
    .then(userIndex => {
        userIndex.forEach(index => {
          lists = index.data("lists").lists;
          tmpID = index.data().id;
          console.log("lists: ", lists);
          lists[title] = docId;
          console.log("updatedLists: ", lists);
          index.set({title: "__ListIndex", uid: uid, lists: lists});
        })
      })
  });

// exports.deleteListTrigger = functions.firestore
//   .document('users/{docId}')
//   .onDelete((snap, context) => {});

