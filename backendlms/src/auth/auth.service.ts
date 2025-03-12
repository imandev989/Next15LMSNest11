import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private lastRequestTime: Map<string, number> = new Map();

  generateRandomCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit random number
  }

  canRequestCode(mobile: string): { canRequest: boolean; timeLeft?: number } {
    const currentTime = Date.now();
    const lastTime = this.lastRequestTime.get(mobile);

    if (!lastTime) {
      return { canRequest: true };
    }

    const timeDiff = currentTime - lastTime;
    const twoMinutesInMs = 2 * 60 * 1000; // 2 minutes in milliseconds

    if (timeDiff < twoMinutesInMs) {
      return {
        canRequest: false,
        timeLeft: Math.ceil((twoMinutesInMs - timeDiff) / 1000), // remaining seconds
      };
    }

    return { canRequest: true };
  }

  setRequestTime(mobile: string) {
    this.lastRequestTime.set(mobile, Date.now());
  }
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
