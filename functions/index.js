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

    if (title === "__ListIndex") return;

    const docId = context.params.docId;

    return db.collection("users").where("uid", "==", uid).where("title", "==", "__ListIndex").get()
      .then(userIndex => {
        if (userIndex.length == 0) {
          tmp = new Map();
          tmp[title] = docId;
          addDoc(collection(db, "users"), {
            title: "__ListIndex",
            uid: uid,
            lists: tmp
          })
        } else {
          userIndex.forEach(idx => {
            lists = idx.data("lists").lists;
            lists[title] = docId;
            idx.ref.set({ lists: lists }, { merge: true });
          })
        }
      })
  });

exports.newUserTrigger = functions.auth.user().onCreate((user) => {
  tmp = new Map();
  addDoc(collection(db, "users"), {
    title: "__ListIndex",
    uid: user.uid,
    lists: tmp
  });
});

// exports.deleteListTrigger = functions.firestore
//   .document('users/{docId}')
//   .onDelete((snap, context) => {});

