import { NextResponse } from "next/server"



export default async function get( req,res) {
    // return NextResponse.json({msg:"funciona"}, {status:200})

    res.status(200).json("funciona")
    
} 