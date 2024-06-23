// "use client"
// import Head from "next/head";
// import Layout from "@/app/components/loyout";
// import styles from "@/app/styles/login.module.css";
// import Image from "next/image";
// import { useSession, signIn } from "next-auth/react";
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';


// export default function Page() {

//   const { data: session } = useSession();
//   const router = useRouter(); // Initialize useRouter hook

//   useEffect(() => {
//     // Ensure this effect runs only on the client side
//     if (session) {
//       router.push('/faculty'); // Redirect to '/faculty' page if session exists
//     }
//   }, [session, router]); // Add router to the dependency array

//   const handleGoogleSignIn = async () => {
//     await signIn('google', { redirect: false });
//     router.push('/'); // Redirect to home page after sign-in
//   };

//   return (
//     <>
//     <Layout>
//       <Head> 
//         <title>Login</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com"/>
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
//         <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@500&family=Josefin+Sans:wght@500&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
//       </Head>
//       <div>
//         <Image src="/logoRmuti.png" width={130} height={230} alt="logo"/>
//       </div>
//         <section className={styles.group}>
//             <div className="title">
//                 <h1 className={styles.message_title}>Login</h1>
//                 <p>Welcome to Royal Graduation Ceremony Ragamangala University Of Technology Isan</p>
//             </div>
//              <button onClick={handleGoogleSignIn} className={styles.google}>
//               <Image src="/google.png" width={30} height={20} alt="Google Logo"/>เข้าสู่ระบบด้วย Google</button>
//         </section>
//     </Layout>
     
//     </>
//   );
// }
