// update-auth.dto.ts
import { IsString, Length, Matches, IsOptional } from 'class-validator';

export class UpdateSignInDto {
  @IsString()
  @Length(11, 11, { message: 'Mobile number must be exactly 11 digits' })
  @Matches(/^09[0-9]{9}$/, {
    message: 'Mobile number must start with 09 and be followed by 9 digits',
  })
  @IsOptional()
  mobile?: string;

  @IsString()
  @Length(6, 6, { message: 'Verification code must be 6 digits' })
  @Matches(/^[0-9]{6}$/, {
    message: 'Verification code must be a 6-digit number',
  })
  @IsOptional()
  code?: string;
}
