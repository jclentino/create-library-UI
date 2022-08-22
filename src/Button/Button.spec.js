import { render } from "@testing-library/react";
import Button from './Button' 

describe('@components/Button', ()=> {
    it('Given a normal component call it should render component', ()=> {
        // arrange 
        const { getByRole } = render(
            <Button type="button" />
        )

        // act 
        const buttonTest = getByRole('button')

        // assert 
        expect(buttonTest).toBeDefined();
    })
})
