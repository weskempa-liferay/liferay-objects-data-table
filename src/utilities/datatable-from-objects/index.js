$.fn.dataTable.ext.errMode = 'none'; //Optional, but can help avoid repeated error messages while configuring the module. 

var elId = fragmentElement.getAttribute("id");
$("#"+elId+" table").DataTable();

var cols = configuration.columns.split(",");

function getColumns(item){
    returnColumns = [];
    for(col in cols){
        returnColumns.push(item[cols[col]]);
    }
    return returnColumns
}

function loadData(data){
    //$("#"+elId+" table").DataTable().clear();
    var length = Object.keys(data.items).length;

    for(var i = 0; i < length; i++) {
      var item = data.items[i];
            var cols = getColumns(item);
            
            // You could also use an ajax property on the data table initialization
      $("#"+elId+" table").dataTable().fnAddData( getColumns(item) );
    }
}


Liferay.Util.fetch(
    configuration.apipath, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf8'
        },
        method: 'GET'
    }
)
    .then((response) => response.json()) 
    .then((data) => {
    //console.log("Return");
    //console.log(data);
    loadData(data);
})
    .catch((error) => {
    console.log(error);
    Liferay.Util.openToast({
        message: 'An error occured.',
        type: 'danger',
    });
});
