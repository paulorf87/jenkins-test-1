const renderTest = require("./controllers/renderTest"); 

test('Check if application response on PORT 5000', ()=>{
    expect(renderTest()).toEqual({msg:"Loading test successful"});
});