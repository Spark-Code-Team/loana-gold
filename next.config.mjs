/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'loana-backend.liara.run',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
        dangerouslyAllowSVG: true
    }
};

// module.exports = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'http',
//             hostname: 'loana-backend.liara.run',
//             port: '',
//             pathname: '/**',
//             search: '',
//           },
//         ],
//       },
// }

export default nextConfig;
