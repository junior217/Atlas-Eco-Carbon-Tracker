import {carbonData } from '@/app/carbon-data'

export async function GET(){
   
   const carbonString = JSON.stringify(carbonData)
   
   return new Response (carbonString, {
        status: 200,
        headers: {
                'Content-Type': 'application/json',
    }
   })
  
};

