import BlitsExampleContent from '../locators/BlitsExample'

export const getScreenShot = () => {
    BlitsExampleContent.getBody.toMatchImageSnapshot({
        imageConfig: {
            threshold: 0.001,
        },
    })

}