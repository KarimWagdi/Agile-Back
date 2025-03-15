import { forwardRef, Inject, Injectable } from "@nestjs/common";  
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
@Injectable()

export class AuthService{
    constructor(
        private jwtService:JwtService,
        @Inject(forwardRef(()=>UserService))
        private readonly userService:UserService,
    ){}
    async generateJwtToken(payload:any){
        const User = this.userService.findOne(payload.id);
        const access_Token =await this.jwtService.signAsync(payload,{secret:process.env.JwtSecret});
        await this.userService.updateAccessToken(payload.id,access_Token);
        return access_Token;
    }
}