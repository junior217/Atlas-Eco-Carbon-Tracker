import { carbonData } from "../../carbon-data"

export async function GET(){
  
   return new Response (JSON.stringify(carbonData), {
        status: 200,
        headers: {
                'Content-Type': 'application/json',
    }
   })
  
};

