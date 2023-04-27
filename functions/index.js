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

    return db.collection("users").where("uid", "==", uid).where("title", "==", "__ListIndex").get()
    .then(userIndex => {
        userIndex.forEach(index => {
          lists = index.data("lists").lists;
          lists.push({[title]: uid});
          index.update({lists: lists});
        })
      })
  });
