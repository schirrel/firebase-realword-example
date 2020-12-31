
const snapshotToArray = function (snapshot) {
    var returnArr = [];

    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};
const actions = (ref) => {
    return {
        save: (model) => {

            let db = window.$app.$db.database();
            return db.ref().child(ref).push(model);
            /* var newKey = database.ref().child(ref).push().key;
             var updates = {};
             updates[`/${ref}/${newKey}`] = model;
             return new Promise((resolve, reject) => {
                 firebase.database().ref().update(updates).then(function (snapshot) {
                     resolve()
                 }).catch((err) => {
                     reject(err);
                 });
             })
 */


        },
        edit: (model) => {
            var updates = {};
            updates[`/${ref}/${model.key}`] = model;
            return new Promise((resolve, reject) => {
                firebase.database().ref().update(updates).then(function () {
                    resolve()
                }).catch((err) => {
                    reject(err);
                });
            })
        },
        delete: (key) => {
            let db = window.$app.$db.database();
            db.ref().child(ref).child(key).remove();
        },
        list: () => {
            let db = window.$app.$db.database();
            return db.ref(ref).limitToLast(10).once('value').then((res) => snapshotToArray(res));
        }
    }
}

const clients = actions('clients');
const products = actions('products');


export {
    clients, products
}
