export default ({ env }) => {
  const appKeys = env.array('APP_KEYS', []);
  const joinedKeys = appKeys.join('');
  const fallbackSecret = joinedKeys || 'changemeadminsecret';
  const fallbackSalt = joinedKeys || 'changemeapitokensalt';
  const fallbackTransferSalt = joinedKeys || 'changemetransfersalt';
  const fallbackEncryptionKey = joinedKeys || 'changemeencryptionkey';

  return {
    auth: {
      // Strapi v5 requires admin.auth.secret; fall back to legacy envs and app keys so dev does not crash
      secret: env('ADMIN_AUTH_SECRET') || env('ADMIN_JWT_SECRET') || fallbackSecret,
    },
    apiToken: {
      salt: env('API_TOKEN_SALT') || fallbackSalt,
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT') || fallbackTransferSalt,
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY') || fallbackEncryptionKey,
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  };
};
