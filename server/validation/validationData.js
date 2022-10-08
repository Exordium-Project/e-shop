function checkProvidedData(data){
    for (const [key, value] of Object.entries(data)) {
        if( value === undefined || value === ''){
            return new Error(400, `Missing required parameter ${key}`);
        }         
    }
}

export default checkProvidedData;