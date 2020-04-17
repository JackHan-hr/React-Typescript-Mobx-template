import HttpRequest from '../request';
import ConfigEnv from '../configEnv';

export default {
  async queryCurrent(): Promise<any> {
    return HttpRequest()(`${ConfigEnv.USERINFO}/api/v2/user/profile/web`);
  },
};
