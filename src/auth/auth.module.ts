import { forwardRef, Module } from "@nestjs/common";
import { UserModule } from '../user/user.module'; 
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
@Module({
    imports:[
        forwardRef(()=> UserModule),
        PassportModule.register({defaultStrategy:'jwt'}),
        JwtModule.register({
            secret:process.env.JwtSecret,
            signOptions:{
                expiresIn:'30d'
            }
        })
    ],
    controllers:[],
    exports:[AuthService],
    providers:[AuthService],
})
export class AuthModule{}