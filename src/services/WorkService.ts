import { LoaderFunctionArgs } from "react-router-dom";
import { works } from "../data/works";
import WorkType from "../types/Work";

interface FetchWorkParams {
    title: string;
}

function fetchWorkByTitle(title: string): WorkType | undefined {
    return works.find(work => work.title === title);
}

export async function workDetailsLoader(args: LoaderFunctionArgs) {
    const params: FetchWorkParams = args.params as unknown as FetchWorkParams;
    const workDetails = await fetchWorkByTitle(params.title);
    return { workDetails };
}