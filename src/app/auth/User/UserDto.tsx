export interface RegisterDto
{
    fullName : string
    phone : string,
    password:string,
    role:number
}

export interface LoginDto
{  
    phone : string,
    password:string,
}