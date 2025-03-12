// create-auth.dto.ts
import { IsString, Length, Matches } from 'class-validator';

export class SignInDto {
  @IsString()
  @Length(11, 11, { message: 'Mobile number must be exactly 11 digits' })
  @Matches(/^09[0-9]{9}$/, {
    message: 'Mobile number must start with 09 and be followed by 9 digits',
  })
  mobile: string;
}
