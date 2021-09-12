# CLI-application

cconst workWithProducts = async(type = "getAll", id, data)=> {
try {
switch(type){
case "getAll":
return await productsOperations.getAll();
case "getById":
return await productsOperations.getById(id);
case "add":
return await productsOperations.add(data);
case "updateById":
return await productsOperations.updateById(id, data);
case "removeById":
return await productsOperations.removeById(id);
}
}
catch(error){
throw error;
}
};

// workWithProducts("getAll")
// .then(data => console.log(data[0]))
// .catch(error => console.log(error));
