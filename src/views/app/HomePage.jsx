import {Atom} from "react-loading-indicators";

export default function HomePage() {
    return (
        <>
            <h1 className="text-red-500 ">Hello World</h1>
            <Atom color={["#32cd32", "#33CC36", "#B8CC33", "#FCCA00"]} size="medium" text="" textColor="" />
        </>
    );
}