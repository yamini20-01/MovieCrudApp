import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<import("./user.model").User>;
    login(loginDto: any): Promise<{
        access_token: string;
    } | {
        message: string;
    }>;
    createUser(createUserDto: CreateUserDto): Promise<import("./user.model").User>;
    getAllUsers(): Promise<import("./user.model").User[]>;
    getUserById(id: string): Promise<import("./user.model").User>;
    updateUser(id: string, updateUserDto: CreateUserDto): Promise<import("./user.model").User>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
}
