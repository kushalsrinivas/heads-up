export interface UserData {
    id?: string;
    aud: string;
    role?: string;
    email?: string;
    email_confirmed_at?: string;
    phone?: string;
    confirmed_at?: string;
    last_sign_in_at?: string;
    app_metadata: {
      provider?: string;
      providers?: string[];
    };
    user_metadata: userMetaData;
    identities: [
      {
        id: string;
        user_id: string;
        identity_data: unknown; // You might want to provide a specific type for this property
        provider: string;
        last_sign_in_at: string;
        created_at: string;
        updated_at: string;
      }
    ];
    created_at: string;
    updated_at: string;
  }

  export interface userMetaData { 
    custom_claims?: {
        global_name: string;
      };
    avatar_url: string | '';
    email: string | '';
    email_verified: boolean;
    full_name: string | '';
    iss: string | '';
    name: string | '';
    phone_verified: boolean;
    picture: string | '';
    provider_id: string | '';
    sub: string | '';
  }

  export type UserMetadata = {
    avatar_url: string;
    custom_claims: {
      global_name: string;
    };
    email: string;
    email_verified: boolean;
    full_name: string;
    iss: string;
    name: string;
    phone_verified: boolean;
    picture: string;
    provider_id: string;
    sub: string;
  };