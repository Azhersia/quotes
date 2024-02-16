import { deleteData, getData, saveData, updateData } from '@/utils/handleDatabase'
import { revalidateTag } from "next/cache"
import Link from 'next/link'


export default async function Home() {

  const data = await getData()

  const deleteForm = async (formData: FormData) => {
    'use server'
    const id = formData.get("id") as string
    const data = await deleteData(id)
    console.log(data)
    revalidateTag("pogo")
  }

  return (


    <div className="bg-olive min-h-screen w-full flex flex-col items-center justify-center gap-8">

      <div className='flex flex-col m-2 items-center'>
        <Link href="/random" className='text-oliveText'>Go to random quote!</Link>
        <Link href="/adminPage" className='text-oliveText'>Go to admin page!</Link>
      </div>
      <div className='flex flex-col items-center justify-center mb-10'>

        <div className='flex gap-2 flex-col bg-grayWhiet p-6'>
          {data.map((quote) => (
            <div key={quote} className='flex flex-col'>

              <div className='bg-oliveShade gap-10 px-4 py-1 rounded-t-lg text-xl'>

                <div className='flex justify-between items-center'>
                  <p>{quote.quote}</p>
                  <div>
                    <p className='ml-5 text-xs hover:cursor-pointer'>ID: {quote.id}</p>
                    <Link href={"/quotes/" + quote.id} className='text-xs ml-5' >Edit</Link>

                    <form action={deleteForm}>
                      <button className='ml-5 text-xs hover:cursor-pointer'>Delete</button>
                      <input type="hidden" name='id' value={quote.id} />
                    </form>
                  </div>
                </div>
              </div>
              <div className='bg-oliveShade gap-10 px-4 py-1 rounded-b-lg'>- {quote.author}</div>


            </div>
          ))}
        </div>

      </div>

    </div>
  );
}