function getAdmins (map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('Talita', 'Admin');
usuarios.set('Patricia', 'Admin');
usuarios.set('Anônimo', 'User');

console.log(getAdmins(usuarios));