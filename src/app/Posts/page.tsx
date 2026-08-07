import CardPost from "./../../components/Ui/Post/CardPost";

export default function Posts() {

  const areas = [
    "الجادرية",
    "السيدية",
    "الكرادة",
    "المنصور",
    "الأعظمية",
  ];


  const posts = [
    {
      urlImagePost: "/headerLogo.png",
      nameCar: "تويوتا كورولا 2022",
      area: ["الجادرية", "السيدية"],
      status: 0,
      university: "جامعة بغداد - الجادرية",
      governorate: "بغداد",
      desciption:
        "رحلة يومية للطلاب من المناطق القريبة إلى الجامعة.",
      shift: 1,
      phoneNumber: "07771902257",
      fullName: "علي مهدي",
    },
  ];


  return (
    <div className="min-h-screen bg-[#EFE1D1] px-4 py-10">

      <div className="mx-auto max-w-6xl">


        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#432E1A]">
            الرحلات المتوفرة
          </h1>

          <p className="mt-2 text-[#432E1A]/70">
            ابحث عن الرحلة المناسبة لك
          </p>
        </div>



        {/* Filters */}
        <div className="mb-8 rounded-3xl bg-[#432E1A] p-6 shadow-xl">

          <div className="grid gap-4 md:grid-cols-4">


            {/* From */}
            <div>
              <label className="mb-2 block text-[#EFE1D1]">
                من
              </label>

              <select
                className="w-full rounded-xl bg-[#EFE1D1] px-4 py-3 text-[#432E1A] outline-none"
              >
                <option value="" hidden disabled>
                  اختر المنطقة
                </option>

                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}

              </select>
            </div>

            {/* To */}
            <div>
              <label className="mb-2 block text-[#EFE1D1]">
                إلى
              </label>

              <select
                className="w-full rounded-xl bg-[#EFE1D1] px-4 py-3 text-[#432E1A] outline-none"
              >

                <option value="" disabled hidden>
                  اختر الجامعة
                </option>

                <option value="جامعة بغداد">
                  جامعة بغداد
                </option>

                <option value="جامعة النهرين">
                  جامعة النهرين
                </option>

              </select>

            </div>





            {/* Shift */}
            <div>
              <label className="mb-2 block text-[#EFE1D1] ">
                الشفت
              </label>


              <select
                className="w-full rounded-xl bg-[#EFE1D1] px-4 py-3 text-[#432E1A] outline-none"
              >

                <option value="" disabled hidden>
                  الكل
                </option>


                <option value="0">
                  صباحي 
                </option>


                <option value="1">
                  مسائي 
                </option>


              </select>

            </div>

            {/* Button */}
            <div className="flex items-end">

              <button
                className="w-full rounded-xl bg-[#EFE1D1] py-3 font-bold text-[#432E1A] hover:bg-white"
              >
                بحث 
              </button>

            </div>


          </div>

        </div>


        {/* Posts */}
        <div className="grid gap-6">

          {posts.map((post, index) => (
            <CardPost
              key={index}
              post={post}
            />
          ))}

        </div>


      </div>

    </div>
  );
}