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
          lists[title] = docId;
          idx.ref.set({ lists: lists }, { merge: true });
        })
      })
  });

exports.deleteListTrigger = functions.firestore
  .document('users/{docId}')
  .onDelete((snap, context) => {
    const oldList = snap.data();

    const uid = oldList.uid;
    const title = oldList.title;

    return db.collection("users").where("uid", "==", uid).where("title", "==", "__ListIndex").get()
      .then(userIndex => {
        userIndex.forEach(idx => {
          lists = idx.data("lists").lists;
          delete lists[title];
          idx.ref.update({ lists: lists });
        })
      })
  });

// exports.saveListTrigger = functions.firestore
//   .document('users/{docId}')
//   .onDelete((snap, context) => {
//   });

