import React from "react";

interface SignInProps {
    name: string,
    email: string
}

const SignIn: React.FC<SignInProps> = ({name,email}) => {
    return <div>SignIn</div>;
};

// function SignIn(){
//     return 'SignIn';
// }
export default SignIn;