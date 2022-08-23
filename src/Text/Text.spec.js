import { render } from "@testing-library/react";
import Text from "./Text";

describe('@components/Text', ()=> {
    it('mensaje de text', ()=> {
        // arrange
        const { getByRole } = render(
            <Text component="h1" >Rick and Morty</Text>
        )
        
        // act 
        const TextTest = getByRole( 'heading', {name: /Rick and Morty/i })

        // assert 
        expect(TextTest).toBeDefined();
    })
})