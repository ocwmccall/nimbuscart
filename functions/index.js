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
        userIndex.forEach(idx => {
          lists = idx.data("lists").lists;
          // tmpID = index.data().id;
          lists[title] = docId;
          idx.ref.set({lists: lists}, {merge: true});
        })
      })
  });

// exports.deleteListTrigger = functions.firestore
//   .document('users/{docId}')
//   .onDelete((snap, context) => {});

