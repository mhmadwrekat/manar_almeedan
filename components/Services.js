import React from 'react';
import Link from "next/link";
/*
<section>
<div class="relative overflow-hidden bg-no-repeat bg-cover">
  <img src="./assest/carosal1.jpg" className='px-5 px-auto'/>
  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full px-5 px-auto overflow-hidden bg-fixed ">
<div class="flex justify-center items-center bg-black opacity-60 h-full">
      <p class="text-white opacity-100">اعمال الرفع المساحي للمباني القائمة الازبلت</p>
  </div>
      </div>
</div>
</section>
</section>
*/
const Services = () => {
  return (
<>
<section className='bg-gradient-to-r from-sky-100 to-white ...'>

<p className='py-4 text-4xl font-semibold text-center text-sky-800 sm:text-5xl'>الخدمات</p>
<section className='grid lg:grid-cols-3 justify-items-center ...'>
<section className='px-5 py-1 px-auto'>
<div class="relative overflow-hidden bg-no-repeat bg-cover">
  <img src="./assest/service5.jpg" className='lg:w-96'/>
  <div class="absolute top-0 right-0 bottom-0 backdrop-brightness-50 left-0 w-full h-full overflow-hidden bg-fixed ">
<div class="flex justify-center items-center h-full">
      <p class="text-white opacity-100"> اعمال الرفع المساحي للمباني القائمة ازبلت 
</p>
  </div>
      </div>
</div>
</section>

<section className='px-5 py-1 px-auto'>
<div class="relative overflow-hidden bg-no-repeat bg-cover">
  <img src="./assest/service4.jpg" className='lg:w-96'/>
  <div class="absolute top-0 right-0 bottom-0 backdrop-brightness-50 left-0 w-full h-full overflow-hidden bg-fixed ">
<div class="flex justify-center items-center h-full">
      <p class="text-white opacity-100">اعمال رفع مساحي طوبغرافي</p>
  </div>
      </div>
</div>
</section>
<section className='px-5 py-1 px-auto'>
<div class="relative overflow-hidden bg-no-repeat bg-cover">
  <img src="./assest/service2.jpg" className='lg:w-96'/>
  <div class="absolute top-0 right-0 bottom-0 backdrop-brightness-50 left-0 w-full h-full overflow-hidden bg-fixed ">
<div class="flex justify-center items-center h-full">
      <p class="text-white text-center opacity-100">اعمال رسم مخططات اوتوكاد
      و<br></br>
      cvil 3D</p>
  </div>
      </div>
</div>
</section>
<section className='px-5 py-1 px-auto'>
<div class="relative overflow-hidden bg-no-repeat bg-cover">
  <img src="./assest/service3.jpg" className='lg:w-96'/>
  <div class="absolute top-0 right-0 bottom-0 backdrop-brightness-50 left-0 w-full h-full overflow-hidden bg-fixed ">
<div class="flex justify-center items-center h-full">
      <p class="text-white opacity-100">
          اعمال مساحية للمشاريع التنفيذية
      </p>
  </div>
      </div>
</div>
</section>
<section className='px-5 py-1 px-auto'>
<div class="relative overflow-hidden bg-no-repeat bg-cover">
  <img src="./assest/service1.jpg" className='lg:w-96'/>
  <div class="absolute top-0 right-0 bottom-0 backdrop-brightness-50 left-0 w-full h-full overflow-hidden bg-fixed ">
<div class="flex justify-center items-center h-full">
      <p class="text-white opacity-100">اعمال حصر الكميات</p>
  </div>
      </div>
</div>
</section>
</section>
</section>








</>
    )
}

export default Services
/*




<section id='Services'  className='w-full px-1 bg-gradient-to-r from-white to-fuchsia-100'>
<p className='pt-10 text-4xl font-semibold text-center sm:text-5xl text-sky-900'>خدماتنا</p>
        <section className='grid grid-cols-2 justify-items-center ... gap-10 py-10 mx-3 sm:mx-0 sm:grid-cols-4 sm:gap-5'>
          <section>
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">الشعر</h4>
                <Link href="/hair">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./assesthair/hair53.jpg" alt="Hair" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  خدماتنا هي وسيلة رائعة للتراجع عن صخب الحياة اليومية في عمان
                </p>
              </div>
            </div>
          </section>
          <section>
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">الأظافر</h4>
                <Link href="/nail">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./assest/nails1.jpg" alt="Nails" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  من لحظة دخولك ينصب تركيزنا على راحتك
                  نحن خبراء في ما نقوم به</p>
              </div>
            </div>
          </section>
          <section id="asasas">
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">البشرة</h4>
                <Link href="/face">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./assest/face5.jpg" alt="Face" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  لقد ميزنا أنفسنا في جوانب خدماتنا ومنتجاتنا وأجواءنا
                </p>
              </div>
            </div>
          </section>
          <section>
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">المساج</h4>
                <Link href="/massage">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./assest/masag.jpg" alt="Massage" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  زورينا لتنالي قسطا من الراحة معنا في سيلا بيوتي سنتر
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className='grid grid-cols-2 justify-items-center ... gap-10 mx-3 sm:mx-0 sm:grid-cols-2 sm:gap-5'>
          <section>
            <div class="w-40 sm:w-60">
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900">المكياج</h4>
                <Link href="/makeup">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./makeup.jpg" alt="Makeup" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  نسعى  لتصنيف سيلا سنتر من الأفضل والأنظف والأكثر صحة
                </p>
              </div>
            </div>
          </section>
          <section>
            <div class="w-40 sm:w-60" id='Product' >
              <div class="relative overflow-hidden rounded-xl shadow-2xl">
                <h4 class="my-1 text-sm font-semibold tracking-tight text-center sm:text-2xl text-sky-900"> خدمات اخرى</h4>
                <Link href="/others">
                  <img class="object-cover w-full sm:h-48 h-28 hover:scale-110"
                    src="./cella6.jpg" alt="others" />
                </Link>
                <p className='px-4 py-2 font-mono text-xs font-bold text-center sm:text-medium text-sky-900'>
                  سيعمل فريقنا المحترف إلى راحتك و تدليلك بافضل الاسعار
                </p>
              </div>
            </div>
          </section>
        </section>

</section>

*/