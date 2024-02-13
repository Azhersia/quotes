import { deleteData, getData, saveData, updateData } from '@/utils/handleDatabase'
import { revalidateTag } from "next/cache"

export default async function Home() {

  const data = await getData()
  //create
  const create = async (formData: FormData) => {
    'use server'
    const author = formData.get("author") as string
    const quote = formData.get("quote") as string
    const data = await saveData(quote, author)
    console.log(data)
    revalidateTag(quote)
  }
  //update
  const update = async (formData: FormData) => {
    'use server'
    const author = formData.get("author") as string
    const quote = formData.get("quote") as string
    const id = formData.get("id") as string
    const data = await saveData(quote, author)
    console.log(data)
  }
  //delete
  const deleteForm = async (formData: FormData) => {
    'use server'
    const id = formData.get("id") as string
    const data = await deleteData(id)
    console.log(data)
  }
  console.log(data)
  return (


    <div className="flex flex-col items-center justify-center bg-olive min-h-screen w-full gap-2 p-3 text-oliveText">

      <div className='flex flex-col m-2 items-center'>
        <a href="/random">Go to random quote!</a>
        <a href="/">Go to all quotes!</a>
      </div>

      <div className='flex flex-col gap-3 '>

        <form action={create} className='bg-oliveShade flex flex-col justify-center items-center gap-3 p-3 '>
          <h1>Create Quote</h1>
          <input type="text" name='author' placeholder='author' className='px-3 py-1 bg-slate-300' />
          <input type="text" name='quote' placeholder='quote' className='px-3 py-1 bg-slate-300' />
          <button className='bg-olive py-1 px-2 rounded'>Save quote</button>

        </form>

        <form action={update} className='bg-oliveShade flex flex-col justify-center items-center gap-3 p-3'>
          <h1>Update Quote</h1>
          <input type="text" name='id' placeholder='id' className='px-3 py-1 bg-slate-300' />
          <input type="text" name='author' placeholder='author' className='px-3 py-1 bg-slate-300' />
          <input type="text" name='quote' placeholder='quote' className='px-3 py-1 bg-slate-300' />
          <button className='bg-olive py-1 px-2 rounded'>Update quote</button>
        </form>

        <form action={deleteForm} className='bg-oliveShade flex flex-col justify-center items-center gap-3 p-3 rounded'>
          <h1>Delete Quote</h1>
          <input type="text" name='id' placeholder='id' className='px-3 py-1 bg-slate-300' />
          <button className='bg-olive py-1 px-2 rounded'>Delete quote</button>
        </form>

      </div>

    </div>
  );
}