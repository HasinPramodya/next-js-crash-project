import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, res: NextResponse){
    return NextResponse.json({message: "Hello from API"}); //If the user hits this api routes, this method is getting exicuted
}

export async function POST(req : NextRequest, res: NextResponse){

    const data = await req.json();
    const {name}  = data;

    return NextResponse.json({
        message: `Helllo ${name}`, this was sent from the api,
    })
}