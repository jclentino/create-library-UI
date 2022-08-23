import { render } from "@testing-library/react"
import MediaImg from "./MediaImg"

describe('@components/MediaImg', ()=> {
    it('mensaje de img', ()=> {
        // arrange 
        const { getByRole } = render(
            <MediaImg  alt="img" src="https://www.algo.com/img" />
        )
        
        // act 
        const MediaImgTest = getByRole('img')

        // assert 
        expect(MediaImgTest).toBeInTheDocument();
        expect(MediaImgTest).toHaveAttribute('src', 'https://www.algo.com/img')
        expect(MediaImgTest).toHaveAttribute('alt')
    })
})
