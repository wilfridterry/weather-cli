
const getArgs = (args) => {
    const result = {};

    const [executer, file, ...rest] = args;

    rest.forEach((element, index, array) => {
        if (element.charAt(0) != '-') {
            return;
        }

        if (index == array.length - 1) {
          return result[element.substring(1)] = true;
        }
        
        if (array[index + 1].charAt(0) == '-') {
           return result[element.substring(1)] = true;
        }
            
        return result[element.substring(1)] = array[index + 1];
    });

    return result;
};

export { getArgs };