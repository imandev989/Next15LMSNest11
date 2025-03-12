import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('api/signin')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post() // Note: I assume "sigin" is a typo and you meant "signin"
  signIn(@Body() signInDto: SignInDto) {
    const { mobile } = signInDto;

    if (!mobile || mobile !== '09355352071') {
      throw new HttpException('Invalid mobile number', HttpStatus.BAD_REQUEST);
    }

    const { canRequest, timeLeft } = this.authService.canRequestCode(mobile);

    if (!canRequest) {
      throw new HttpException(
        {
          message: 'You must try to sign in 2 minutes later',
          timeLeft: `${timeLeft} seconds`,
        },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    const code = this.authService.generateRandomCode();
    this.authService.setRequestTime(mobile);

    return {
      code,
      message: 'Verification code generated successfully',
    };
  }

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
