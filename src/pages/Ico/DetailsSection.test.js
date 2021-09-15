const DetailsSection = require("./DetailsSection")

// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new DetailsSection.default("Pierre Edouard")
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
