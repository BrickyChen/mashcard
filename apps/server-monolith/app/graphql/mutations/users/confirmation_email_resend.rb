# frozen_string_literal: true

module Mutations
  module Users
    class ConfirmationEmailResend < ::Mutations::BaseMutation
      graphql_name 'UserConfirmationEmailResend'
      argument :email, Scalars::Email, description_same(Types::User, :email), required: true

      SEND_INTERVAL = 50.seconds

      def resolve(email:)
        Brickdoc::Redis.with(:state) do |redis|
          key = "graphql:mutation:userConfirmationEmailResend/#{email.to_data_masking}"
          return { errors: [I18n.t('errors.messages.send_interval')] } if redis.exists?(key)

          user = Accounts::User.find_by(email: email, confirmed_at: nil)
          if user.nil?
            { errors: ["Email #{I18n.t('errors.messages.not_found')}"] }
          elsif user.resend_confirmation_instructions
            redis.setex(key, SEND_INTERVAL, '1')
            {}
          end
        end
      end
    end
  end
end