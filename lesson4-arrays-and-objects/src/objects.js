const nestObj = {
    name: 'ViktorObj',
    func: {
        arrNested: [1, 2, 'test', true, null],
        funNested() {
            console.log(this.arrNested);
        }
    }
};

console.log(nestObj);

console.log(nestObj.func.funNested());

console.log(Object.keys(nestObj));

console.log(Object.keys(nestObj.func));
