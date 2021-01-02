
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
            if (!!model.key) {
                return db.ref(ref).child(model.key).update(model);
            } else {
                return db.ref().child(ref).push(model);
            }
        },
        update: (model) => {
            let db = window.$app.$db.database();
            return db.ref(ref).child(model.key).update(model);
            /* 
            
            var updates = {};
            updates[`/${ref}/${model.key}`] = model;
            return new Promise((resolve, reject) => {
                 db.ref().update(updates).then(function () {
                     resolve()
                 }).catch((err) => {
                     reject(err);
                 });
             })*/
        },
        get: (key) => {
            let db = window.$app.$db.database();
            return db.ref().child(ref).child(key).once('value');
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
