import ScrollBar from "./ScrollBar";
import PowerfulAssistant from "./RightComponents/PowerfulAssistant";
import VisualBullets from "./RightComponents/VisualBullets";
import KeyboardFirst from "./RightComponents/KeyboardFirst";
import Button from "./RightComponents/Button";

const RightPane = () => {

    return (
        <div className="w-[50%] p-20  flex space-x-3 max-[600px]:w-[75vw]   max-[600px]:p-9 max-[600px]:block max-[600px]:h-[100vh] ">
            <div className="mr-12 -ml-12 ">
                <KeyboardFirst />
                <VisualBullets />
                <PowerfulAssistant />
            </div>
            <ScrollBar />
            <Button />
        </div>
    )
}
export default RightPane;