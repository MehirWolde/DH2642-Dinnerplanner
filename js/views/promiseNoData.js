function promiseNoData(promise, data, error){
    if(!promise){
        return <span>No Data</span>;
    }

    if (promise && !data && !error) {
        return <img src="https://www.csc.kth.se/~cristi/loading.gif"/>
    }

    if (promise && !data && error) {
        return <span>{error}</span>
    }

    if(promise && data && !error){
        return false;
    }
}