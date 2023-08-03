/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return[
            {
                source:'/upload',
                destination:'http://localhost:8080/api/uploads'
            }
        ]
    }
}

module.exports = nextConfig
