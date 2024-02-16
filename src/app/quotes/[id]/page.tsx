import { db } from '@/utils/db'
import React from 'react'
import Link from 'next/link'

type PageByIdProps = {
  params: {
    id: number
  }
}

export default function pageById({ params }: PageByIdProps) {

  async function onSubmit(data: FormData) {
    'use server'
    db.query('UPDATE quotes SET author = $1, quote= $2 WHERE id= $3', [data.get('author'), data.get('quote'), params.id])
  }

  return (
    <div>

      <div className="flex flex-col items-center justify-center bg-olive min-h-screen w-full gap-2 p-3 text-oliveText">

        <div className='flex flex-col m-2 items-center'>
          <Link href="/">Go back to all quotes!</Link>
        </div>

        <div className='flex flex-col gap-3 '>


          <form action={onSubmit} className='bg-oliveShade flex flex-col justify-center items-center gap-3 p-3 rounded'>

            <h1>Edit Quote</h1>
            <div>
              <input type="text" name="author" placeholder='Author' className='px-3 py-1 bg-slate-300' />
            </div>

            <div>
              <input type="text" name="quote" placeholder='Quote' className='px-3 py-1 bg-slate-300' />
            </div>

            <button className='bg-olive py-1 px-2 rounded'>Save</button>
          </form>
        </div>

      </div>

    </div >
  )
}
