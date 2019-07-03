    <% if current_user %>
      <script>
        window.currentUser = {
          "id": <%= current_user.id %>,
          "email": "<%= current_user.email %>",
          "displayName": "<%= current_user.display_name %>"
        }
      </script>
    <% end %>