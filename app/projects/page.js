import CardProject from "@/components/CardProject"

const projects = () => {
    return (
        <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-2 gap-10 h-full items-center px-5 py-10 sm:px-20 xl:px-40 ">
            <CardProject
                title="Landing page Charly Cloud"
            description="Primer desarrollo de landing page simple para emprendimiento nacional de software de farmacias."
            tecnologies="Uso html5, CSS, Bootstrap"
            bgCardImage= "https://res.cloudinary.com/dzppqa6a9/image/upload/v1706020585/charly_ssa0gj.png"
            urlDescription= "https://milenaandrews.github.io/Mi-primer-repositorio/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=df2454a9-07ad-4761-8458-7c80616cb944&submissionId=7d7c9a1e-b4ed-f578-0776-9bbabd8004fc"
            urlRepositorio= "https://github.com/Milenaandrews/Mi-primer-repositorio?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=df2454a9-07ad-4761-8458-7c80616cb944&submissionId=7d7c9a1e-b4ed-f578-0776-9bbabd8004fc"
            />
            <CardProject
                title="Web Inventario Bodega Warehouse"
            description="Primer desarrollo de landing page simple para emprendimiento nacional de software de farmacias."
            tecnologies="Uso html5, CSS, Bootstrap"
            bgCardImage= "https://res.cloudinary.com/dzppqa6a9/image/upload/v1707747878/bodega_mjqpkf.jpg"
            urlDescription= "https://milenaandrews.github.io/Proyecto2_CRUD/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=094d300d-7208-4cf3-98f6-32944386100a&submissionId=eac7a154-40d2-1cdb-c549-dd8622de298e"
            urlRepositorio= "https://github.com/Milenaandrews/Proyecto2_CRUD?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=094d300d-7208-4cf3-98f6-32944386100a&submissionId=eac7a154-40d2-1cdb-c549-dd8622de298e"
            />
            <CardProject
                title="Sitio web Restaurant Dekulto"
            description="Desarrollo de sitio web para restaurante con un enfoque especial en la implementación de una carta dinámica. Además, incluye dos páginas CRUD para gestionar las reservas y la incorporación de nuevos platos al menú."
            tecnologies="Uso html5, CSS, JS, React, Firebase, MUI"
            bgCardImage= "https://res.cloudinary.com/dzppqa6a9/image/upload/v1707751720/dekulto_b3zwtz.jpg"
            urlDescription= "https://main--dekulto.netlify.app/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=f00d0c67-6153-415e-ab72-8a1c19ab51ac&submissionId=8eeb4970-af1c-7e9e-3d7b-251715972e81"
            urlRepositorio= "https://github.com/Milenaandrews/DeKulto?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=f00d0c67-6153-415e-ab72-8a1c19ab51ac&submissionId=8eeb4970-af1c-7e9e-3d7b-251715972e81"
            />
            <CardProject
                title="Dashboard Weather App"
            description="Desarrollo de aplicación para ver el clima en tiempo real, alimentandose de API Weather app."
            bgCardImage= "https://res.cloudinary.com/dzppqa6a9/image/upload/v1707751719/weatherApp_qf8lll.jpg"
            urlDescription= "https://main--fascinating-frangipane-179fcd.netlify.app/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=348889ba-7756-4caa-a95b-7e5f152981df&submissionId=e01bbe6e-d33c-0c34-988c-a592ea0f8313"
            urlRepositorio= "https://github.com/Milenaandrews/Proyecto3_dashboard?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=348889ba-7756-4caa-a95b-7e5f152981df&submissionId=e01bbe6e-d33c-0c34-988c-a592ea0f8313"
            />
            <CardProject
                title="Ecommerce libreria"
            description="Desarrollo de e-commerce para librería con funciones esenciales como creación de usuarios, gestión de productos y actualización de stock.  Además la integración de PayPal para realizar los pagos."
            bgCardImage= "https://res.cloudinary.com/dzppqa6a9/image/upload/v1707747542/Libreria_bk8sk5.png"
            urlDescription= "https://regal-chimera-e19bc1.netlify.app/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=134d16ea-0d59-4488-a460-186c1a208e6b&submissionId=df7bd3f5-a477-7926-d753-ae019c26b05a"
            urlRepositorio= ""
            />
      
        </div>
    )
}

export default projects