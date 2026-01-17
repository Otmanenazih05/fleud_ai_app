from allauth.socialaccount.adapter import DefaultSocialAccountAdapter

class CustomSocialAccountAdapter(DefaultSocialAccountAdapter):
    def save_user(self, request, sociallogin, form=None):
        # Call the parent class to perform standard user save logic
        user = super().save_user(request, sociallogin, form)

        # Set your custom fields
        user.is_social_user = True
        user.social_provider = sociallogin.account.provider

        # Bonus: Populate profile_picture if available in Google's extra_data
        if sociallogin.account.provider == 'google':
            picture_url = sociallogin.account.extra_data.get('picture')
            if picture_url:
                user.profile_picture = picture_url

        user.save()
        return user